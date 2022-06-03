class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.string :content
      t.string :full_name
      t.string :email
      t.integer :rating
      t.string :image
      t.integer :user_id
      t.timestamps
    end
  end
end
