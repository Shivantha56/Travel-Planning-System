export default class GuideModel{

    #guideId
    #guideName
    #guideAddress
    #guideAge
    #guideContactNo
    #guideImage
    #guideNicFront
    #guideNicBack
    #guideIdFront
    #guideIdBack
    #manDayValue
    #remarks


    constructor(guideId, guideName, guideAddress, guideAge, guideContactNo, guideImage, guideNicFront, guideNicBack, guideIdFront, guideIdBack, manDayValue, remarks) {
        this.#guideId = guideId;
        this.#guideName = guideName;
        this.#guideAddress = guideAddress;
        this.#guideAge = guideAge;
        this.#guideContactNo = guideContactNo;
        this.#guideImage = guideImage;
        this.#guideNicFront = guideNicFront;
        this.#guideNicBack = guideNicBack;
        this.#guideIdFront = guideIdFront;
        this.#guideIdBack = guideIdBack;
        this.#manDayValue = manDayValue;
        this.#remarks = remarks;
    }


    get guideId() {
        return this._guideId;
    }

    set guideId(value) {
        this._guideId = value;
    }

    get guideName() {
        return this._guideName;
    }

    set guideName(value) {
        this._guideName = value;
    }

    get guideAddress() {
        return this._guideAddress;
    }

    set guideAddress(value) {
        this._guideAddress = value;
    }

    get guideAge() {
        return this._guideAge;
    }

    set guideAge(value) {
        this._guideAge = value;
    }

    get guideContactNo() {
        return this._guideContactNo;
    }

    set guideContactNo(value) {
        this._guideContactNo = value;
    }

    get guideImage() {
        return this._guideImage;
    }

    set guideImage(value) {
        this._guideImage = value;
    }

    get guideNicFront() {
        return this._guideNicFront;
    }

    set guideNicFront(value) {
        this._guideNicFront = value;
    }

    get guideNicBack() {
        return this._guideNicBack;
    }

    set guideNicBack(value) {
        this._guideNicBack = value;
    }

    get guideIdFront() {
        return this._guideIdFront;
    }

    set guideIdFront(value) {
        this._guideIdFront = value;
    }

    get guideIdBack() {
        return this._guideIdBack;
    }

    set guideIdBack(value) {
        this._guideIdBack = value;
    }

    get manDayValue() {
        return this._manDayValue;
    }

    set manDayValue(value) {
        this._manDayValue = value;
    }

    get remarks() {
        return this._remarks;
    }

    set remarks(value) {
        this._remarks = value;
    }
}