import {Figure, FigureNames} from "./Figure";
import {Colors} from "../Colors";
import {Cell} from "../Cell";
import blackLogo from '../../assets/bishop.png'
import whiteLogo from '../../assets/bishop-white.png'

export class Bishop extends Figure{

    constructor(color: Colors, cell:Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.name = FigureNames.BISHOP
    }
}