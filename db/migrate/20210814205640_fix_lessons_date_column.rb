class FixLessonsDateColumn < ActiveRecord::Migration[5.2]
  def change
    add_column :lessons, :date, :date, null: false
    add_index :lessons, [:student_id, :teacher_id, :date, :time], unique: true
  end
end
