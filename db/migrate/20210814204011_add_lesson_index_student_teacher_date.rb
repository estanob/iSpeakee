class AddLessonIndexStudentTeacherDate < ActiveRecord::Migration[5.2]
  def change
    add_index :lessons, [:student_id, :teacher_id, :time], unique: true
  end
end
