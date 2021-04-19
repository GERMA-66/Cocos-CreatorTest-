// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.RichText)
    public label: cc.RichText = null;

    @property
    public text: string = null;

    @property
    public txtCo: string = "";

    /**文本颜色 */
    @property
    public underLine: boolean = false;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {
        this.setTxt();
    }

    // update (dt) {}

    private setTxt(): void {
        var colorTxt: string = "";
        colorTxt = "<color=";
        if (this.txtCo) {
            if (this.txtCo.indexOf("#") != -1) {
                colorTxt += "";
            } else {
                colorTxt += "#";
            }
            colorTxt += (this.txtCo + ">" + this.text + "</c>");
        } else {
            colorTxt = this.text;
        }
        var ulStr: string = "";
        if (this.underLine) {
            ulStr = "<u>" + colorTxt + "</u>";
        } else {
            ulStr = colorTxt;
        }
        this.label.string = ulStr;
        this.node.width = this.label.node.width;
        this.node.height = this.label.node.height;
    }
}
