# == Schema Information
#
# Table name: teacher_profiles
#
#  id                     :bigint           not null, primary key
#  about_me               :text             not null
#  lessons_teaching_style :text             not null
#  me_as_teacher          :text             not null
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#  teacher_id             :integer          not null
#
# Indexes
#
#  index_teacher_profiles_on_teacher_id  (teacher_id) UNIQUE
#
require 'test_helper'

class TeacherProfileTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
