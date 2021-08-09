class CreateLanguageToStudents < ActiveRecord::Migration[5.2]
  def change
    create_table :language_to_students do |t|
      t.integer :student_id, null: false, references: [:users, :id]
      t.integer :language_id, null: false, references: [:languages, :id]
      t.timestamps
    end
    add_index :language_to_students, [:language_id, :student_id], unique: true
  end
end
