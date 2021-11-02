class massages {
  constructor() {
    this._messages = [];
    this._loader = null;
    this._currentId = 0;
    this._previousAbleToDelete = false;
    this._ableToDeleteResolve = null;
    this.resolveAbleToDelete = (newValue) => {
      if ( this._previousAbleToDelete !== newValue) {
        this._previousAbleToDelete = newValue;
        console.log( this._previousAbleToDelete);
        this._ableToDeleteResolve(newValue);
      }
      console.log("ableToDelete", this._ableToDeleteResolve);
    };
  }
  getAbleToDelete = () => {
    let tempResolve;
    let tempPromise = new Promise(function (resolve) {
      tempResolve = resolve;
    });
    this._ableToDeleteResolve = tempResolve;
    return tempPromise;
  };
  getMessage = () => {
    let tempLoader;
    let tempPromise = new Promise(function (resolve) {
      tempLoader = resolve;
    });
    if (this._messages && this._messages.length > 0) {
      let tempMessage = this._messages.shift();
      tempMessage.receivedTime = Date.now();
      tempLoader(tempMessage);
    } else {
      this._loader = tempLoader;      
    }
    if(!this._messages.length>0){
      this.resolveAbleToDelete(false);
    }
    return tempPromise;
  };
  addMessge = (newMessage) => {
    newMessage.id = this._currentId;
    this._currentId++;
    newMessage.creationTime = Date.now();
    this._messages.push(newMessage);
    if (this._loader) {
      let tempMessage = this._messages.shift();
      tempMessage.receivedTime = Date.now();
      this._loader(tempMessage);
      this._loader = null;
    }
    if(this._messages&&this._messages.length>0){

      this.resolveAbleToDelete(true);
    }

    console.log(this._messages);
  };
  deleteMessage = () => {
    this._messages.pop();
    if(!this._messages.length>0){
      this.resolveAbleToDelete(false);
    }
    
  };
}
export default new massages();
