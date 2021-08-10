class Remove < ActiveRecord::Migration[5.2]
  def change
    remove_index :posts, name: "index_posts_on_creator_id"
  end
end
