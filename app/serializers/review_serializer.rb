class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :content, :full_name, :email, :rating ,:image, :user_id
end
