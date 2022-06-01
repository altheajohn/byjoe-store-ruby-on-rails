class CreateInventories < ActiveRecord::Migration[6.1]
  def change
    create_table :inventories do |t|
      t.integer :quantity, default: 1
      t.belongs_to :product
      t.timestamps
    end
  end
end
