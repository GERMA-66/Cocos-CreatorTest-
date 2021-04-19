
const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Canvas)
    public canvas: cc.Canvas = null;

    onLoad() {
        cc.game.on("TouchBtn", this.touchBtn, this);
    }

    start() {

    }

    // update (dt) {}

    private touchBtn(e: cc.Event): void {
        console.log(e);
    }
}
