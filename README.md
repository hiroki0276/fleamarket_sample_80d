# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

## itemsテーブル
|column|Type|Options|
|------|----|-------|
|name|string|null:false|
|introduction|text|null:false|
|user_id|references|null:false,foreign_key:true|
|category_id|integer|null:false|
|brand_id|----|-----|
|condition_id|integer|null:false|(active_hash)
|postagepayer_id|integer|null:false|(active_hash)
|postagetype_id|integer|null:false|(active_hash)
|prefecture_id|integer|null:false|(active_hash)
|preparationdays_id|integer|null:false|(active_hash)
|price|integer|null:false|
|sellstatus_id|integer|null:false|(active_hash)
|buyer_id|integer|-----|
|saler_id|references|null:false,foreign_key:true|

### Association
- belongs_to :user
- belongs_to :category
- belongs_to :brand
- has_many :images
- belongs_to :prefecture
- belongs_to :saler,class_name:"User"
- belongs_to :buyer,class_name:"User"

## prefecture active hash

### Association
- has_many :items
- has_many :sendings


## brandテーブル
|column|Type|Options|
|------|----|-------|
|name|string|null:false|

### Association
- has_many :items

## imageテーブル
|column|Type|Options|
|------|----|-------|
|src|string|null:false|
|item|references|foreign_key:true|

### Association
- belongs_to :item

## categoryテーブル
|column|Type|Options|
|------|----|-------|
|name|string|null:false|
|ancestry|string|null:false|(gem)

### Association
- has_many :items

## usersテーブル
|column|Type|Options|
|------|----|-------|
|nickname|string|null: false, unique: true|
|mail|string|null: false, unique: true|
|password|string|null: false|
### Association
- has_many :items
- has_one :profile
- has_one :sending
- has_one :credit_card


## profilesテーブル
|column|Type|Options|
|------|----|-------|
|first_name|string|null:false|
|family_name|string|null:false|
|first_name_kana|string|null:false|
|family_name_kana|string|null:false|
|birth_date|date|null:false|
|use_id|references|null:false, foreign_key:true|

### Association
- belongs_to :user

## sendingテーブル
|column|Type|Options|
|------|----|-------|
|first_name|string|null:false|
|family_name|string|null:false|
|first_name_kana|string|null:false|
|family_name_kana|string|null:false|
|post_code|integer|null:false|
|prefecture_id|references|foreign_key:true, null:false|
|city|string|null:false|
|house_number|string|null:false|
|building_name|string|-------|
|phone_number|integer|-------|
|user_id|references|null:false, foreign_key:true|

### Association
- belongs_to :user
- belongs_to :prefecture

## credit_cardsテーブル
|column|Type|Options|
|------|----|-------|
|name|string|null:false|
|card_number|integer|null:false, unique:true|
|expiration_year|integer|null:false|
|expiration_month|integer|null:false|
|use_id|references|null:false, foreign_key:true|

### Association
- belongs_to :user

### Database initialization

### How to run the test suite
- URL:http://3.113.175.20 
- テスト用アカウント 
- 購入者用 メールアドレス：test@test.test 
- パスワード：testtest 
- 購入用カード情報 番号：4242424242424242 期限：12月 30年 セキュリティカード：072 
- 出品者用 メールアドレス：uru@uru.uru 
- パスワード：uru1234

### Services (job queues, cache servers, search engines, etc.)
- ユーザー登録機能 
- 出品機能 
- 商品表示機能 
- 購入機能
### Deployment instructions
- URL IPアドレス：3.113.175.20 
- Github（最終課題のリポジトリ）：fleamarket_sample_80d 
- Basic認証 ID：80d Pass：password



