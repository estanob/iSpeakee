class FinalizeUniqueIndexOnLessons < ActiveRecord::Migration[5.2]
  def change
    add_index :lessons, [:student_id, :teacher_id, :when, :language_id], unique: true, name: 'lesson_index'
  end
end
