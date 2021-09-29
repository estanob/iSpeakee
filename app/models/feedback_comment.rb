# == Schema Information
#
# Table name: feedback_comments
#
#  id           :bigint           not null, primary key
#  body         :text             not null
#  date_written :date             not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  lesson_id    :integer          not null
#  student_id   :integer          not null
#  teacher_id   :integer          not null
#
# Indexes
#
#  feedback_index  (teacher_id,student_id,lesson_id) UNIQUE
#
class FeedbackComment < ApplicationRecord
  validates_uniqueness_of :student_id, scope: [:teacher_id, :lesson_id]

  belongs_to :student,
    foreign_key: :student_id,
    class_name: :User

  belongs_to :teacher,
    foreign_key: :teacher_id,
    class_name: :User

  belongs_to :lesson,
    foreign_key: :lesson_id,
    class_name: :Lesson
end
