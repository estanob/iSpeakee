@teacher_to_students.each do |teacher_to_student|
  json.set! teacher_to_student.id do
    json.partial! "teacher_to_student", teacher_to_student: teacher_to_student
  end
end