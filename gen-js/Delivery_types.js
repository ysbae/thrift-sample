//
// Autogenerated by Thrift Compiler (0.9.2)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//


if (typeof Mesh === 'undefined') {
  Mesh = {};
}
if (typeof Mesh.Delivery === 'undefined') {
  Mesh.Delivery = {};
}
Mesh.Delivery.DeliveryStatus = {
  'SUBMITTED' : 1,
  'DELIVERING' : 2,
  'COMPLETED' : 10,
  'CANCELLED' : 11
};
Mesh.Delivery.Gender = {
  'FEMALE' : 1,
  'MALE' : 2
};
Mesh.Delivery.ErrorCode = {
  'UNKNOWN' : 1,
  'BAD_DATA_FORMAT' : 2,
  'DATA_REQUIRED' : 3,
  'INVALID_AUTH' : 4
};
Mesh.Delivery.Courier = function(args) {
  this.id = null;
  this.name = null;
  this.phone = null;
  this.gender = null;
  if (args) {
    if (args.id !== undefined) {
      this.id = args.id;
    }
    if (args.name !== undefined) {
      this.name = args.name;
    }
    if (args.phone !== undefined) {
      this.phone = args.phone;
    }
    if (args.gender !== undefined) {
      this.gender = args.gender;
    }
  }
};
Mesh.Delivery.Courier.prototype = {};
Mesh.Delivery.Courier.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.I32) {
        this.id = input.readI32().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.name = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.phone = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.I32) {
        this.gender = input.readI32().value;
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Mesh.Delivery.Courier.prototype.write = function(output) {
  output.writeStructBegin('Courier');
  if (this.id !== null && this.id !== undefined) {
    output.writeFieldBegin('id', Thrift.Type.I32, 1);
    output.writeI32(this.id);
    output.writeFieldEnd();
  }
  if (this.name !== null && this.name !== undefined) {
    output.writeFieldBegin('name', Thrift.Type.STRING, 2);
    output.writeString(this.name);
    output.writeFieldEnd();
  }
  if (this.phone !== null && this.phone !== undefined) {
    output.writeFieldBegin('phone', Thrift.Type.STRING, 3);
    output.writeString(this.phone);
    output.writeFieldEnd();
  }
  if (this.gender !== null && this.gender !== undefined) {
    output.writeFieldBegin('gender', Thrift.Type.I32, 4);
    output.writeI32(this.gender);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

Mesh.Delivery.LatLng = function(args) {
  this.lat = null;
  this.lng = null;
  if (args) {
    if (args.lat !== undefined) {
      this.lat = args.lat;
    }
    if (args.lng !== undefined) {
      this.lng = args.lng;
    }
  }
};
Mesh.Delivery.LatLng.prototype = {};
Mesh.Delivery.LatLng.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.DOUBLE) {
        this.lat = input.readDouble().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.DOUBLE) {
        this.lng = input.readDouble().value;
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Mesh.Delivery.LatLng.prototype.write = function(output) {
  output.writeStructBegin('LatLng');
  if (this.lat !== null && this.lat !== undefined) {
    output.writeFieldBegin('lat', Thrift.Type.DOUBLE, 1);
    output.writeDouble(this.lat);
    output.writeFieldEnd();
  }
  if (this.lng !== null && this.lng !== undefined) {
    output.writeFieldBegin('lng', Thrift.Type.DOUBLE, 2);
    output.writeDouble(this.lng);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

Mesh.Delivery.Delivery = function(args) {
  this.id = null;
  this.origin = null;
  this.destination = null;
  this.status = null;
  this.courier = null;
  this.createdAt = null;
  if (args) {
    if (args.id !== undefined) {
      this.id = args.id;
    }
    if (args.origin !== undefined) {
      this.origin = args.origin;
    }
    if (args.destination !== undefined) {
      this.destination = args.destination;
    }
    if (args.status !== undefined) {
      this.status = args.status;
    }
    if (args.courier !== undefined) {
      this.courier = args.courier;
    }
    if (args.createdAt !== undefined) {
      this.createdAt = args.createdAt;
    }
  }
};
Mesh.Delivery.Delivery.prototype = {};
Mesh.Delivery.Delivery.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.id = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRUCT) {
        this.origin = new Mesh.Delivery.LatLng();
        this.origin.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRUCT) {
        this.destination = new Mesh.Delivery.LatLng();
        this.destination.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.I32) {
        this.status = input.readI32().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.STRUCT) {
        this.courier = new Mesh.Delivery.Courier();
        this.courier.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.I64) {
        this.createdAt = input.readI64().value;
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Mesh.Delivery.Delivery.prototype.write = function(output) {
  output.writeStructBegin('Delivery');
  if (this.id !== null && this.id !== undefined) {
    output.writeFieldBegin('id', Thrift.Type.STRING, 1);
    output.writeString(this.id);
    output.writeFieldEnd();
  }
  if (this.origin !== null && this.origin !== undefined) {
    output.writeFieldBegin('origin', Thrift.Type.STRUCT, 2);
    this.origin.write(output);
    output.writeFieldEnd();
  }
  if (this.destination !== null && this.destination !== undefined) {
    output.writeFieldBegin('destination', Thrift.Type.STRUCT, 3);
    this.destination.write(output);
    output.writeFieldEnd();
  }
  if (this.status !== null && this.status !== undefined) {
    output.writeFieldBegin('status', Thrift.Type.I32, 4);
    output.writeI32(this.status);
    output.writeFieldEnd();
  }
  if (this.courier !== null && this.courier !== undefined) {
    output.writeFieldBegin('courier', Thrift.Type.STRUCT, 5);
    this.courier.write(output);
    output.writeFieldEnd();
  }
  if (this.createdAt !== null && this.createdAt !== undefined) {
    output.writeFieldBegin('createdAt', Thrift.Type.I64, 6);
    output.writeI64(this.createdAt);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

Mesh.Delivery.ServiceException = function(args) {
  this.code = null;
  this.parameter = null;
  this.message = null;
  if (args) {
    if (args.code !== undefined) {
      this.code = args.code;
    }
    if (args.parameter !== undefined) {
      this.parameter = args.parameter;
    }
    if (args.message !== undefined) {
      this.message = args.message;
    }
  }
};
Thrift.inherits(Mesh.Delivery.ServiceException, Thrift.TException);
Mesh.Delivery.ServiceException.prototype.name = 'ServiceException';
Mesh.Delivery.ServiceException.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.I32) {
        this.code = input.readI32().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.parameter = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.message = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Mesh.Delivery.ServiceException.prototype.write = function(output) {
  output.writeStructBegin('ServiceException');
  if (this.code !== null && this.code !== undefined) {
    output.writeFieldBegin('code', Thrift.Type.I32, 1);
    output.writeI32(this.code);
    output.writeFieldEnd();
  }
  if (this.parameter !== null && this.parameter !== undefined) {
    output.writeFieldBegin('parameter', Thrift.Type.STRING, 2);
    output.writeString(this.parameter);
    output.writeFieldEnd();
  }
  if (this.message !== null && this.message !== undefined) {
    output.writeFieldBegin('message', Thrift.Type.STRING, 3);
    output.writeString(this.message);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

