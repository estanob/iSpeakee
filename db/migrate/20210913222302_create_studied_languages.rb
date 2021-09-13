class CreateStudiedLanguages < ActiveRecord::Migration[5.2]
  def change
    create_table :studied_languages do |t|
      t.integer :student_id, null: false
      t.integer :language_id, null: false
      t.timestamps
    end
    add_index :studied_languages, [ :student_id, :language_id ], unique: true
  end
end
