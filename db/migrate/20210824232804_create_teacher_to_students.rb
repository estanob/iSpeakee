class CreateTeacherToStudents < ActiveRecord::Migration[5.2]
  def change
    create_table :teacher_to_students do |t|
      t.integer :student_id, null: false, references: [:users, :id]
      t.integer :teacher_id, null: false, references: [:users, :id]
      t.timestamps
    end
    add_index :teacher_to_students, [:student_id, :teacher_id], unique: true
  end
end
