//
// Thrift Javascript Library Patch
//
// Until the latest Thrift library (1.0.0-dev), Thrift.Protocol.prototype.skip was not implemented.
// This implementation should be removed when the official implementation is available.
//
(function(Thrift, undefined) {
Thrift.Protocol.prototype.skip = function(type) {
  var ret;
  switch(type) {
    case Thrift.Type.STOP:
      return null;

    case Thrift.Type.BOOL:
      return this.readBool();

    case Thrift.Type.BYTE:
      return this.readByte();

    case Thrift.Type.I16:
      return this.readI16();

    case Thrift.Type.I32:
      return this.readI32();

    case Thrift.Type.I64:
      return this.readI64();

    case Thrift.Type.DOUBLE:
      return this.readDouble();

    case Thrift.Type.STRING:
      return this.readString();

    case Thrift.Type.STRUCT:
      this.readStructBegin();
      while (true) {
        var ret = this.readFieldBegin();
        if(ret.ftype == Thrift.Type.STOP) {
          break;
        }
        this.skip(ret.ftype);
        this.readFieldEnd();
      }
      this.readStructEnd();
      return null;

    case Thrift.Type.MAP:
      ret = this.readMapBegin();
      for(var i = 0; i < ret.size; i++) {
        if(i > 0) {
          if(this.rstack.length > this.rpos[this.rpos.length - 1] + 1) {
            this.rstack.pop();
          }
        }
        this.skip(ret.ktype);
        this.skip(ret.vtype);
      }
      this.readMapEnd();
      return null;

    case Thrift.Type.SET:
      ret = this.readSetBegin();
      for (var i = 0; i < ret.size; i++) {
        this.skip(ret.etype);
      }
      this.readSetEnd();
      return null;

    case Thrift.Type.LIST:
      ret = this.readListBegin();
      for (var i = 0; i < ret.size; i++) {
        this.skip(ret.etype);
      }
      this.readListEnd();
      return null;
  }
};
})(window.Thrift);
