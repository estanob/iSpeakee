# == Schema Information
#
# Table name: lessons
#
#  id          :bigint           not null, primary key
#  end_time    :datetime
#  when        :datetime
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  language_id :bigint           not null
#  student_id  :bigint           not null
#  teacher_id  :bigint           not null
#
# Indexes
#
#  lesson_index  (student_id,teacher_id,when,language_id) UNIQUE
#
require 'test_helper'

class LessonTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
