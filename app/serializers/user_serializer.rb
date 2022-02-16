class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :name, :phone, :address, :password_digest
end
