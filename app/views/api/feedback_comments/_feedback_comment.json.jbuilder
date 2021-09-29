json.extract! feedback_comment, :id, :body, :created_at, :updated_at
json.dateWritten feedback_comment.date_written
json.studentId feedback_comment.student_id
json.teacherId feedback_comment.teacher_id
json.lessonId feedback_comment.lesson_id