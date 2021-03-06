# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  display_name    :string
#  first_name      :string           not null
#  last_name       :string
#  password_digest :string           not null
#  session_token   :string           not null
#  username        :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
# Indexes
#
#  index_users_on_session_token  (session_token) UNIQUE
#  index_users_on_username       (username) UNIQUE
#
class User < ApplicationRecord
  validates :username, :password_digest, :session_token, :first_name, :last_name, presence: true
  validates :username, length: { minimum: 5 }, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true
  after_initialize :ensure_session_token

  attr_reader :password

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil if user.nil?
    user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.base64(64)
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.base64(64)
  end

  has_many :language_to_students,
    primary_key: :id,
    foreign_key: :student_id,
    class_name: :LanguageToStudent,
    dependent: :destroy
    
  has_many :languages_learning,
    through: :language_to_students,
    source: :language,
    dependent: :destroy

  has_many :posts,
    foreign_key: :creator_id,
    class_name: :Post,
    dependent: :destroy

  has_many :attended_lessons,
    foreign_key: :student_id,
    class_name: :Lesson

  has_many :taught_lessons,
    foreign_key: :teacher_id,
    class_name: :Lesson

  has_many :outward_teacher_to_students,
    foreign_key: :student_id,
    class_name: :TeacherToStudent
    
  has_many :inward_teacher_to_students,
    foreign_key: :teacher_id,
    class_name: :TeacherToStudent

  has_many :students,
    through: :outward_teacher_to_students,
    source: :student

  has_many :teachers,
    through: :inward_teacher_to_students,
    source: :teacher

  has_many :studied_languages,
    foreign_key: :student_id,
    class_name: :StudiedLanguage,
    dependent: :destroy

  has_one :teacher_profile,
    foreign_key: :teacher_id,
    class_name: :User
end
