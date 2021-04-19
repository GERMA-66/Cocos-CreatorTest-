const { ccclass, property } = cc._decorator;

@ccclass
export default class TestView extends cc.Component {

    @property(cc.Sprite)
    public bg: cc.Sprite = null;

    @property(cc.Label)
    public label: cc.Label = null;
    @property(cc.RichText)
    public richText: cc.RichText = null;

    @property(cc.Button)
    public btnTxt: cc.Button = null;

    @property(cc.Sprite)
    public iconImg: cc.Sprite = null;

    @property(cc.Sprite)
    public loader: cc.Sprite = null;

    private _nodeTest: cc.Node = null;

    onLoad() {
        // this.playIconTween();
        this.label.string = "<u>这是一个文本</u>";
        this.richText.string = "<u><b><color=#00ff00>Rich</c><color=#0fffff>Text</color></b></u>";
        this.btnTxt.node.on(cc.Node.EventType.TOUCH_END, this.touchTxtBtnEnd, this);
    }

    start() {

        // this.setIcon();

        // this.copyNode();
        this.enabled = false;

    }

    onEnable(): void {

    }

    onDisable(): void {

    }

    update(dt) {

    }

    private touchTxtBtnEnd(): void {
        // var event: cc.Event = new cc.Event("TouchBtn", false);
        // cc.game.dispatchEvent(event);
        this.loadRes();
    }

    private setIcon(): void {
        this.iconImg.node.setPosition(cc.v2(30, 100));
        this.iconImg.node.angle = -30;
        this.iconImg.node.scaleX = 1.5;
        this.iconImg.node.zIndex = 10;
        this.iconImg.node.color = cc.Color.GREEN;
        this.iconImg.node.opacity = 120;
    }

    private copyNode(): void {
        this._nodeTest = cc.instantiate(this.iconImg.node);
        this._nodeTest.parent = this.node;
        this._nodeTest.setPosition(cc.v2(-100, -100));

        setTimeout(this.test.bind(this), 5000);
    }
    private test(): void {
        this._nodeTest.destroy();
    }

    private playIconTween(): void {
        var firstTw: cc.Tween = cc.tween().by(1, { scale: 0.5 });
        var secondTw: cc.Tween = cc.tween().by(1, { scale: -0.5 });
        var tween: cc.Tween = cc.tween().sequence(firstTw, secondTw);
        cc.tween(this.iconImg.node).repeatForever(tween).start();
    }

    private loadRes(): void {
        // cc.resources.load("logo", cc.SpriteFrame, (err: Error, spriteFrame: cc.SpriteFrame) => {
        //     this.loader.spriteFrame = spriteFrame;
        // });
        cc.resources.load("test", cc.TextAsset, (err: Error, txt: cc.TextAsset) => {
            cc.log(txt.text);
        });
        cc.resources.load("jsonTest", cc.JsonAsset, (err: Error, json: cc.JsonAsset) => {
            cc.log(json);
        });
    }

}