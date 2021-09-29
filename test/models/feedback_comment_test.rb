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
require 'test_helper'

class FeedbackCommentTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
