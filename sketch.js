var db_value = "Karak"

function setup() {
  createCanvas(400,600);
  // bg = createSprite(200, 250, 50, 50);
  // bg.addImage(bg_image)
  // bg.scale = 0.8

  stove = createSprite(35, 120, 50, 50);
  stove.addImage(stove_image)
  stove.scale = 0.16
 
  esp = createSprite(35, 200, 50, 50);
  esp.addImage(esp_image)
  esp.scale = 0.16

 teapot = createSprite(35, 280, 50, 50);
 teapot.addImage(teapot_image)
 teapot.scale = 0.16

 water = createSprite(310, 120, 50, 50);
 water.addImage(water_image)
 water.scale = 0.15

 tea_leaves = createSprite(310, 200, 50, 50);
 tea_leaves.addImage(tea_image)
 tea_leaves.scale = 0.15

 choc_powder = createSprite(310, 280, 50, 50);
 choc_powder.addImage(coco_image)
 choc_powder.scale = 0.15

milk = createSprite(260, 240, 50, 50);
milk.addImage(milk_image)
milk.scale = 0.15

frothedmilk = createSprite(200, 200, 50, 50);
frothedmilk.addImage(frothedmilk_image)
frothedmilk.scale = 0.15

sugar = createSprite(260, 160, 50, 50);
sugar.addImage(sugar_image)
sugar.scale = 0.15


score = 0
}

function preload(){
bg_image = loadImage("background.png")
esp_image = loadImage("espresso.png")
es_img = loadImage("es.png")

stove_image = loadImage("stove.png")
st_img = loadImage("st.png")
teapot_image= loadImage("teapot.png")
t_img= loadImage("t.png")

sugar_image= loadImage("sugar.png")
coco_image= loadImage("coco_powder.png")
water_image= loadImage("water.png")
tea_image= loadImage("tea_leaves.png")
milk_image= loadImage("milk.png")
frothedmilk_image= loadImage("frothed_milk.png")

}

function score_inc(){
  score+=1
}

function draw() {
  image(bg_image,0,0)
  textSize(30)
text(score,50,50)
  if(stove.scale == 0.1){
    image(st_img,100,250, 130,40)
    textSize(14)
    text("Stove added",100,80)
    if(teapot.scale==0.1){
      image(t_img,110,220, 60,40)
      text("Teapot added",100,100)
    }
    if(water.scale==0.1){
      image(t_img,110,220, 60,40)
      text("Water added",100,120)

    }
    if(tea_leaves.scale==0.1){
      image(t_img,110,220, 60,40)
      text("Tea Leaves added",100,140)

    }
    if(sugar.scale==0.1){
      image(t_img,110,220, 60,40)
      text("Sugar added",100,160)

    }
    if(milk.scale==0.1){
      image(t_img,110,220, 60,40)
      text("Milk added",100,180)

    }
  } else if(esp.scale == 0.1){
    image(es_img,65,170, 130,130)
  }
  if (mousePressedOver(stove)) {
    stove.scale = 0.1;
    text(" Added",100,50)
  } 
  if (mousePressedOver(esp)) {
    esp.scale = 0.1;
    text(" Added",100,50)
  } 
  if (mousePressedOver(teapot)) {
    teapot.scale = 0.1;
    text(" Added",100,50)
  } 
  if (mousePressedOver(sugar)) {
    sugar.scale = 0.1;
    text(" Added",100,50)
  } 
  if (mousePressedOver(choc_powder)) {
    choc_powder.scale = 0.1;
    text(" Added",100,50)
  } 
  if (mousePressedOver(water)) {
    water.scale = 0.1;
    text(" Added",100,50)
  } 
  if (mousePressedOver(tea_leaves)) {
    tea_leaves.scale = 0.1;
    text(" Added",100,50)
  } 
  if (mousePressedOver(milk)) {
    milk.scale = 0.1;
    text(" Added",100,50)
  }
  if (mousePressedOver(frothedmilk)) {
    frothedmilk.scale = 0.1;
    text(" Added",100,50)
  }
  generateScore(db_value)
  drawSprites();

}

function generateScore(db_value){
  if(db_value == "Karak"){
    if(stove.scale==0.1 && tea_leaves.scale==0.1
       && water.scale == 0.1 && milk.scale == 0.1 
       && teapot.scale==0.1 && sugar.scale == 0.1){
        score = 100
       }else {
        score = 50
       }
  }
}
