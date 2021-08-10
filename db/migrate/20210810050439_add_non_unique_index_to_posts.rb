class AddNonUniqueIndexToPosts < ActiveRecord::Migration[5.2]
  def change
    add_index :posts, :creator_id
  end
end
