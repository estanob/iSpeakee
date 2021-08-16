class RemoveOldUniqueIndexOnLessons < ActiveRecord::Migration[5.2]
  def change
    remove_index :lessons, name: "index_lessons_on_student_id_and_teacher_id_and_time"
  end
end
