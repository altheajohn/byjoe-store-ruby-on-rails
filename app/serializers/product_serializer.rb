class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :size, :image
  has_one :inventory
  belongs_to :category
end
