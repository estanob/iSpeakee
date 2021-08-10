class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.integer :creator_id, null: false, index: { unique: true }
      t.text :body, null: false
      t.timestamps
    end
  end
end
