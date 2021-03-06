class IntroOutsideBehavior extends Sup.Behavior {
  doorRenderer: Sup.SpriteRenderer;
  shadowActor: Sup.Actor;

  awake() {
    Game.playMusic("Ambient 1", 1);
    
    this.doorRenderer = Sup.getActor("Outside Door").spriteRenderer;
    this.shadowActor = Sup.getActor("Shadow");
    
    new Sup.Tween(this.shadowActor, { y: -25 }).to({ y: -10 }, 3000)
    .easing(TWEEN.Easing.Quintic.Out)
    .onUpdate((obj) => {
      this.shadowActor.setLocalY(obj.y);
    }).onComplete(() => {
      Sup.Audio.playSound(Sup.get("Menus/Intro Outside/Open Door Sound", Sup.Sound));
      this.doorRenderer.setAnimation("Open", false);
      
      Sup.setTimeout(2000, () => { Game.loadMap("Home Outside"); })
    }).start();
  }
}
Sup.registerBehavior(IntroOutsideBehavior);
