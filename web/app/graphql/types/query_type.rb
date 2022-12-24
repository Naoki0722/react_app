module Types
  class QueryType < Types::BaseObject
    # Add `node(id: ID!) and `nodes(ids: [ID!]!)`
    include GraphQL::Types::Relay::HasNodeField
    include GraphQL::Types::Relay::HasNodesField

    # Add root-level fields here.
    # They will be entry points for queries on your schema.

    # TODO: remove me
    field :test_field, String, null: false,
      description: "An example field added by the generator"
    # ユーザー情報取得
    field :user, UserType, "Find a user by ID" do
      argument :id, ID
    end

    def test_field
      "Hello World!"
    end

    # Then provide an implementation:
    def user(id:)
      User.find(id)
    end
  end
end
