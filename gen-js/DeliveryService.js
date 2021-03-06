//
// Autogenerated by Thrift Compiler (0.9.2)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//


//HELPER FUNCTIONS AND STRUCTURES

Mesh.Delivery.DeliveryService_submitDelivery_args = function(args) {
  this.accessToken = null;
  this.delivery = null;
  if (args) {
    if (args.accessToken !== undefined) {
      this.accessToken = args.accessToken;
    }
    if (args.delivery !== undefined) {
      this.delivery = args.delivery;
    }
  }
};
Mesh.Delivery.DeliveryService_submitDelivery_args.prototype = {};
Mesh.Delivery.DeliveryService_submitDelivery_args.prototype.read = function(input) {
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
        this.accessToken = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRUCT) {
        this.delivery = new Mesh.Delivery.Delivery();
        this.delivery.read(input);
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

Mesh.Delivery.DeliveryService_submitDelivery_args.prototype.write = function(output) {
  output.writeStructBegin('DeliveryService_submitDelivery_args');
  if (this.accessToken !== null && this.accessToken !== undefined) {
    output.writeFieldBegin('accessToken', Thrift.Type.STRING, 1);
    output.writeString(this.accessToken);
    output.writeFieldEnd();
  }
  if (this.delivery !== null && this.delivery !== undefined) {
    output.writeFieldBegin('delivery', Thrift.Type.STRUCT, 2);
    this.delivery.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

Mesh.Delivery.DeliveryService_submitDelivery_result = function(args) {
  this.success = null;
  this.e = null;
  if (args instanceof Mesh.Delivery.ServiceException) {
    this.e = args;
    return;
  }
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
    if (args.e !== undefined) {
      this.e = args.e;
    }
  }
};
Mesh.Delivery.DeliveryService_submitDelivery_result.prototype = {};
Mesh.Delivery.DeliveryService_submitDelivery_result.prototype.read = function(input) {
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
      case 0:
      if (ftype == Thrift.Type.STRUCT) {
        this.success = new Mesh.Delivery.Delivery();
        this.success.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.e = new Mesh.Delivery.ServiceException();
        this.e.read(input);
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

Mesh.Delivery.DeliveryService_submitDelivery_result.prototype.write = function(output) {
  output.writeStructBegin('DeliveryService_submitDelivery_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
    this.success.write(output);
    output.writeFieldEnd();
  }
  if (this.e !== null && this.e !== undefined) {
    output.writeFieldBegin('e', Thrift.Type.STRUCT, 1);
    this.e.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

Mesh.Delivery.DeliveryService_getDelivery_args = function(args) {
  this.accessToken = null;
  this.deliveryId = null;
  if (args) {
    if (args.accessToken !== undefined) {
      this.accessToken = args.accessToken;
    }
    if (args.deliveryId !== undefined) {
      this.deliveryId = args.deliveryId;
    }
  }
};
Mesh.Delivery.DeliveryService_getDelivery_args.prototype = {};
Mesh.Delivery.DeliveryService_getDelivery_args.prototype.read = function(input) {
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
        this.accessToken = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I32) {
        this.deliveryId = input.readI32().value;
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

Mesh.Delivery.DeliveryService_getDelivery_args.prototype.write = function(output) {
  output.writeStructBegin('DeliveryService_getDelivery_args');
  if (this.accessToken !== null && this.accessToken !== undefined) {
    output.writeFieldBegin('accessToken', Thrift.Type.STRING, 1);
    output.writeString(this.accessToken);
    output.writeFieldEnd();
  }
  if (this.deliveryId !== null && this.deliveryId !== undefined) {
    output.writeFieldBegin('deliveryId', Thrift.Type.I32, 2);
    output.writeI32(this.deliveryId);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

Mesh.Delivery.DeliveryService_getDelivery_result = function(args) {
  this.success = null;
  this.e = null;
  if (args instanceof Mesh.Delivery.ServiceException) {
    this.e = args;
    return;
  }
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
    if (args.e !== undefined) {
      this.e = args.e;
    }
  }
};
Mesh.Delivery.DeliveryService_getDelivery_result.prototype = {};
Mesh.Delivery.DeliveryService_getDelivery_result.prototype.read = function(input) {
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
      case 0:
      if (ftype == Thrift.Type.STRUCT) {
        this.success = new Mesh.Delivery.Delivery();
        this.success.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.e = new Mesh.Delivery.ServiceException();
        this.e.read(input);
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

Mesh.Delivery.DeliveryService_getDelivery_result.prototype.write = function(output) {
  output.writeStructBegin('DeliveryService_getDelivery_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
    this.success.write(output);
    output.writeFieldEnd();
  }
  if (this.e !== null && this.e !== undefined) {
    output.writeFieldBegin('e', Thrift.Type.STRUCT, 1);
    this.e.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

Mesh.Delivery.DeliveryService_listDeliveries_args = function(args) {
  this.accessToken = null;
  this.offset = null;
  this.limit = null;
  if (args) {
    if (args.accessToken !== undefined) {
      this.accessToken = args.accessToken;
    }
    if (args.offset !== undefined) {
      this.offset = args.offset;
    }
    if (args.limit !== undefined) {
      this.limit = args.limit;
    }
  }
};
Mesh.Delivery.DeliveryService_listDeliveries_args.prototype = {};
Mesh.Delivery.DeliveryService_listDeliveries_args.prototype.read = function(input) {
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
        this.accessToken = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I32) {
        this.offset = input.readI32().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I32) {
        this.limit = input.readI32().value;
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

Mesh.Delivery.DeliveryService_listDeliveries_args.prototype.write = function(output) {
  output.writeStructBegin('DeliveryService_listDeliveries_args');
  if (this.accessToken !== null && this.accessToken !== undefined) {
    output.writeFieldBegin('accessToken', Thrift.Type.STRING, 1);
    output.writeString(this.accessToken);
    output.writeFieldEnd();
  }
  if (this.offset !== null && this.offset !== undefined) {
    output.writeFieldBegin('offset', Thrift.Type.I32, 2);
    output.writeI32(this.offset);
    output.writeFieldEnd();
  }
  if (this.limit !== null && this.limit !== undefined) {
    output.writeFieldBegin('limit', Thrift.Type.I32, 3);
    output.writeI32(this.limit);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

Mesh.Delivery.DeliveryService_listDeliveries_result = function(args) {
  this.success = null;
  this.e = null;
  if (args instanceof Mesh.Delivery.ServiceException) {
    this.e = args;
    return;
  }
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
    if (args.e !== undefined) {
      this.e = args.e;
    }
  }
};
Mesh.Delivery.DeliveryService_listDeliveries_result.prototype = {};
Mesh.Delivery.DeliveryService_listDeliveries_result.prototype.read = function(input) {
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
      case 0:
      if (ftype == Thrift.Type.LIST) {
        var _size0 = 0;
        var _rtmp34;
        this.success = [];
        var _etype3 = 0;
        _rtmp34 = input.readListBegin();
        _etype3 = _rtmp34.etype;
        _size0 = _rtmp34.size;
        for (var _i5 = 0; _i5 < _size0; ++_i5)
        {
          var elem6 = null;
          elem6 = new Mesh.Delivery.Delivery();
          elem6.read(input);
          this.success.push(elem6);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.e = new Mesh.Delivery.ServiceException();
        this.e.read(input);
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

Mesh.Delivery.DeliveryService_listDeliveries_result.prototype.write = function(output) {
  output.writeStructBegin('DeliveryService_listDeliveries_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.LIST, 0);
    output.writeListBegin(Thrift.Type.STRUCT, this.success.length);
    for (var iter7 in this.success)
    {
      if (this.success.hasOwnProperty(iter7))
      {
        iter7 = this.success[iter7];
        iter7.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  if (this.e !== null && this.e !== undefined) {
    output.writeFieldBegin('e', Thrift.Type.STRUCT, 1);
    this.e.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

Mesh.Delivery.DeliveryService_assignCourier_args = function(args) {
  this.accessToken = null;
  this.deliveryId = null;
  this.courierId = null;
  if (args) {
    if (args.accessToken !== undefined) {
      this.accessToken = args.accessToken;
    }
    if (args.deliveryId !== undefined) {
      this.deliveryId = args.deliveryId;
    }
    if (args.courierId !== undefined) {
      this.courierId = args.courierId;
    }
  }
};
Mesh.Delivery.DeliveryService_assignCourier_args.prototype = {};
Mesh.Delivery.DeliveryService_assignCourier_args.prototype.read = function(input) {
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
        this.accessToken = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I32) {
        this.deliveryId = input.readI32().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I32) {
        this.courierId = input.readI32().value;
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

Mesh.Delivery.DeliveryService_assignCourier_args.prototype.write = function(output) {
  output.writeStructBegin('DeliveryService_assignCourier_args');
  if (this.accessToken !== null && this.accessToken !== undefined) {
    output.writeFieldBegin('accessToken', Thrift.Type.STRING, 1);
    output.writeString(this.accessToken);
    output.writeFieldEnd();
  }
  if (this.deliveryId !== null && this.deliveryId !== undefined) {
    output.writeFieldBegin('deliveryId', Thrift.Type.I32, 2);
    output.writeI32(this.deliveryId);
    output.writeFieldEnd();
  }
  if (this.courierId !== null && this.courierId !== undefined) {
    output.writeFieldBegin('courierId', Thrift.Type.I32, 3);
    output.writeI32(this.courierId);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

Mesh.Delivery.DeliveryService_assignCourier_result = function(args) {
  this.success = null;
  this.e = null;
  if (args instanceof Mesh.Delivery.ServiceException) {
    this.e = args;
    return;
  }
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
    if (args.e !== undefined) {
      this.e = args.e;
    }
  }
};
Mesh.Delivery.DeliveryService_assignCourier_result.prototype = {};
Mesh.Delivery.DeliveryService_assignCourier_result.prototype.read = function(input) {
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
      case 0:
      if (ftype == Thrift.Type.STRUCT) {
        this.success = new Mesh.Delivery.Delivery();
        this.success.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.e = new Mesh.Delivery.ServiceException();
        this.e.read(input);
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

Mesh.Delivery.DeliveryService_assignCourier_result.prototype.write = function(output) {
  output.writeStructBegin('DeliveryService_assignCourier_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
    this.success.write(output);
    output.writeFieldEnd();
  }
  if (this.e !== null && this.e !== undefined) {
    output.writeFieldBegin('e', Thrift.Type.STRUCT, 1);
    this.e.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

Mesh.Delivery.DeliveryService_cancelDelivery_args = function(args) {
  this.accessToken = null;
  this.deliveryId = null;
  if (args) {
    if (args.accessToken !== undefined) {
      this.accessToken = args.accessToken;
    }
    if (args.deliveryId !== undefined) {
      this.deliveryId = args.deliveryId;
    }
  }
};
Mesh.Delivery.DeliveryService_cancelDelivery_args.prototype = {};
Mesh.Delivery.DeliveryService_cancelDelivery_args.prototype.read = function(input) {
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
        this.accessToken = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I32) {
        this.deliveryId = input.readI32().value;
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

Mesh.Delivery.DeliveryService_cancelDelivery_args.prototype.write = function(output) {
  output.writeStructBegin('DeliveryService_cancelDelivery_args');
  if (this.accessToken !== null && this.accessToken !== undefined) {
    output.writeFieldBegin('accessToken', Thrift.Type.STRING, 1);
    output.writeString(this.accessToken);
    output.writeFieldEnd();
  }
  if (this.deliveryId !== null && this.deliveryId !== undefined) {
    output.writeFieldBegin('deliveryId', Thrift.Type.I32, 2);
    output.writeI32(this.deliveryId);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

Mesh.Delivery.DeliveryService_cancelDelivery_result = function(args) {
  this.success = null;
  this.e = null;
  if (args instanceof Mesh.Delivery.ServiceException) {
    this.e = args;
    return;
  }
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
    if (args.e !== undefined) {
      this.e = args.e;
    }
  }
};
Mesh.Delivery.DeliveryService_cancelDelivery_result.prototype = {};
Mesh.Delivery.DeliveryService_cancelDelivery_result.prototype.read = function(input) {
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
      case 0:
      if (ftype == Thrift.Type.STRUCT) {
        this.success = new Mesh.Delivery.Delivery();
        this.success.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.e = new Mesh.Delivery.ServiceException();
        this.e.read(input);
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

Mesh.Delivery.DeliveryService_cancelDelivery_result.prototype.write = function(output) {
  output.writeStructBegin('DeliveryService_cancelDelivery_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
    this.success.write(output);
    output.writeFieldEnd();
  }
  if (this.e !== null && this.e !== undefined) {
    output.writeFieldBegin('e', Thrift.Type.STRUCT, 1);
    this.e.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

Mesh.Delivery.DeliveryService_completeDelivery_args = function(args) {
  this.accessToken = null;
  this.deliveryId = null;
  if (args) {
    if (args.accessToken !== undefined) {
      this.accessToken = args.accessToken;
    }
    if (args.deliveryId !== undefined) {
      this.deliveryId = args.deliveryId;
    }
  }
};
Mesh.Delivery.DeliveryService_completeDelivery_args.prototype = {};
Mesh.Delivery.DeliveryService_completeDelivery_args.prototype.read = function(input) {
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
        this.accessToken = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I32) {
        this.deliveryId = input.readI32().value;
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

Mesh.Delivery.DeliveryService_completeDelivery_args.prototype.write = function(output) {
  output.writeStructBegin('DeliveryService_completeDelivery_args');
  if (this.accessToken !== null && this.accessToken !== undefined) {
    output.writeFieldBegin('accessToken', Thrift.Type.STRING, 1);
    output.writeString(this.accessToken);
    output.writeFieldEnd();
  }
  if (this.deliveryId !== null && this.deliveryId !== undefined) {
    output.writeFieldBegin('deliveryId', Thrift.Type.I32, 2);
    output.writeI32(this.deliveryId);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

Mesh.Delivery.DeliveryService_completeDelivery_result = function(args) {
  this.success = null;
  this.e = null;
  if (args instanceof Mesh.Delivery.ServiceException) {
    this.e = args;
    return;
  }
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
    if (args.e !== undefined) {
      this.e = args.e;
    }
  }
};
Mesh.Delivery.DeliveryService_completeDelivery_result.prototype = {};
Mesh.Delivery.DeliveryService_completeDelivery_result.prototype.read = function(input) {
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
      case 0:
      if (ftype == Thrift.Type.STRUCT) {
        this.success = new Mesh.Delivery.Delivery();
        this.success.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.e = new Mesh.Delivery.ServiceException();
        this.e.read(input);
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

Mesh.Delivery.DeliveryService_completeDelivery_result.prototype.write = function(output) {
  output.writeStructBegin('DeliveryService_completeDelivery_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
    this.success.write(output);
    output.writeFieldEnd();
  }
  if (this.e !== null && this.e !== undefined) {
    output.writeFieldBegin('e', Thrift.Type.STRUCT, 1);
    this.e.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

Mesh.Delivery.DeliveryServiceClient = function(input, output) {
    this.input = input;
    this.output = (!output) ? input : output;
    this.seqid = 0;
};
Mesh.Delivery.DeliveryServiceClient.prototype = {};
Mesh.Delivery.DeliveryServiceClient.prototype.submitDelivery = function(accessToken, delivery, callback) {
  if (callback === undefined) {
    this.send_submitDelivery(accessToken, delivery);
    return this.recv_submitDelivery();
  } else {
    var postData = this.send_submitDelivery(accessToken, delivery, true);
    return this.output.getTransport()
      .jqRequest(this, postData, arguments, this.recv_submitDelivery);
  }
};

Mesh.Delivery.DeliveryServiceClient.prototype.send_submitDelivery = function(accessToken, delivery, callback) {
  this.output.writeMessageBegin('submitDelivery', Thrift.MessageType.CALL, this.seqid);
  var args = new Mesh.Delivery.DeliveryService_submitDelivery_args();
  args.accessToken = accessToken;
  args.delivery = delivery;
  args.write(this.output);
  this.output.writeMessageEnd();
  return this.output.getTransport().flush(callback);
};

Mesh.Delivery.DeliveryServiceClient.prototype.recv_submitDelivery = function() {
  var ret = this.input.readMessageBegin();
  var fname = ret.fname;
  var mtype = ret.mtype;
  var rseqid = ret.rseqid;
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(this.input);
    this.input.readMessageEnd();
    throw x;
  }
  var result = new Mesh.Delivery.DeliveryService_submitDelivery_result();
  result.read(this.input);
  this.input.readMessageEnd();

  if (null !== result.e) {
    throw result.e;
  }
  if (null !== result.success) {
    return result.success;
  }
  throw 'submitDelivery failed: unknown result';
};
Mesh.Delivery.DeliveryServiceClient.prototype.getDelivery = function(accessToken, deliveryId, callback) {
  if (callback === undefined) {
    this.send_getDelivery(accessToken, deliveryId);
    return this.recv_getDelivery();
  } else {
    var postData = this.send_getDelivery(accessToken, deliveryId, true);
    return this.output.getTransport()
      .jqRequest(this, postData, arguments, this.recv_getDelivery);
  }
};

Mesh.Delivery.DeliveryServiceClient.prototype.send_getDelivery = function(accessToken, deliveryId, callback) {
  this.output.writeMessageBegin('getDelivery', Thrift.MessageType.CALL, this.seqid);
  var args = new Mesh.Delivery.DeliveryService_getDelivery_args();
  args.accessToken = accessToken;
  args.deliveryId = deliveryId;
  args.write(this.output);
  this.output.writeMessageEnd();
  return this.output.getTransport().flush(callback);
};

Mesh.Delivery.DeliveryServiceClient.prototype.recv_getDelivery = function() {
  var ret = this.input.readMessageBegin();
  var fname = ret.fname;
  var mtype = ret.mtype;
  var rseqid = ret.rseqid;
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(this.input);
    this.input.readMessageEnd();
    throw x;
  }
  var result = new Mesh.Delivery.DeliveryService_getDelivery_result();
  result.read(this.input);
  this.input.readMessageEnd();

  if (null !== result.e) {
    throw result.e;
  }
  if (null !== result.success) {
    return result.success;
  }
  throw 'getDelivery failed: unknown result';
};
Mesh.Delivery.DeliveryServiceClient.prototype.listDeliveries = function(accessToken, offset, limit, callback) {
  if (callback === undefined) {
    this.send_listDeliveries(accessToken, offset, limit);
    return this.recv_listDeliveries();
  } else {
    var postData = this.send_listDeliveries(accessToken, offset, limit, true);
    return this.output.getTransport()
      .jqRequest(this, postData, arguments, this.recv_listDeliveries);
  }
};

Mesh.Delivery.DeliveryServiceClient.prototype.send_listDeliveries = function(accessToken, offset, limit, callback) {
  this.output.writeMessageBegin('listDeliveries', Thrift.MessageType.CALL, this.seqid);
  var args = new Mesh.Delivery.DeliveryService_listDeliveries_args();
  args.accessToken = accessToken;
  args.offset = offset;
  args.limit = limit;
  args.write(this.output);
  this.output.writeMessageEnd();
  return this.output.getTransport().flush(callback);
};

Mesh.Delivery.DeliveryServiceClient.prototype.recv_listDeliveries = function() {
  var ret = this.input.readMessageBegin();
  var fname = ret.fname;
  var mtype = ret.mtype;
  var rseqid = ret.rseqid;
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(this.input);
    this.input.readMessageEnd();
    throw x;
  }
  var result = new Mesh.Delivery.DeliveryService_listDeliveries_result();
  result.read(this.input);
  this.input.readMessageEnd();

  if (null !== result.e) {
    throw result.e;
  }
  if (null !== result.success) {
    return result.success;
  }
  throw 'listDeliveries failed: unknown result';
};
Mesh.Delivery.DeliveryServiceClient.prototype.assignCourier = function(accessToken, deliveryId, courierId, callback) {
  if (callback === undefined) {
    this.send_assignCourier(accessToken, deliveryId, courierId);
    return this.recv_assignCourier();
  } else {
    var postData = this.send_assignCourier(accessToken, deliveryId, courierId, true);
    return this.output.getTransport()
      .jqRequest(this, postData, arguments, this.recv_assignCourier);
  }
};

Mesh.Delivery.DeliveryServiceClient.prototype.send_assignCourier = function(accessToken, deliveryId, courierId, callback) {
  this.output.writeMessageBegin('assignCourier', Thrift.MessageType.CALL, this.seqid);
  var args = new Mesh.Delivery.DeliveryService_assignCourier_args();
  args.accessToken = accessToken;
  args.deliveryId = deliveryId;
  args.courierId = courierId;
  args.write(this.output);
  this.output.writeMessageEnd();
  return this.output.getTransport().flush(callback);
};

Mesh.Delivery.DeliveryServiceClient.prototype.recv_assignCourier = function() {
  var ret = this.input.readMessageBegin();
  var fname = ret.fname;
  var mtype = ret.mtype;
  var rseqid = ret.rseqid;
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(this.input);
    this.input.readMessageEnd();
    throw x;
  }
  var result = new Mesh.Delivery.DeliveryService_assignCourier_result();
  result.read(this.input);
  this.input.readMessageEnd();

  if (null !== result.e) {
    throw result.e;
  }
  if (null !== result.success) {
    return result.success;
  }
  throw 'assignCourier failed: unknown result';
};
Mesh.Delivery.DeliveryServiceClient.prototype.cancelDelivery = function(accessToken, deliveryId, callback) {
  if (callback === undefined) {
    this.send_cancelDelivery(accessToken, deliveryId);
    return this.recv_cancelDelivery();
  } else {
    var postData = this.send_cancelDelivery(accessToken, deliveryId, true);
    return this.output.getTransport()
      .jqRequest(this, postData, arguments, this.recv_cancelDelivery);
  }
};

Mesh.Delivery.DeliveryServiceClient.prototype.send_cancelDelivery = function(accessToken, deliveryId, callback) {
  this.output.writeMessageBegin('cancelDelivery', Thrift.MessageType.CALL, this.seqid);
  var args = new Mesh.Delivery.DeliveryService_cancelDelivery_args();
  args.accessToken = accessToken;
  args.deliveryId = deliveryId;
  args.write(this.output);
  this.output.writeMessageEnd();
  return this.output.getTransport().flush(callback);
};

Mesh.Delivery.DeliveryServiceClient.prototype.recv_cancelDelivery = function() {
  var ret = this.input.readMessageBegin();
  var fname = ret.fname;
  var mtype = ret.mtype;
  var rseqid = ret.rseqid;
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(this.input);
    this.input.readMessageEnd();
    throw x;
  }
  var result = new Mesh.Delivery.DeliveryService_cancelDelivery_result();
  result.read(this.input);
  this.input.readMessageEnd();

  if (null !== result.e) {
    throw result.e;
  }
  if (null !== result.success) {
    return result.success;
  }
  throw 'cancelDelivery failed: unknown result';
};
Mesh.Delivery.DeliveryServiceClient.prototype.completeDelivery = function(accessToken, deliveryId, callback) {
  if (callback === undefined) {
    this.send_completeDelivery(accessToken, deliveryId);
    return this.recv_completeDelivery();
  } else {
    var postData = this.send_completeDelivery(accessToken, deliveryId, true);
    return this.output.getTransport()
      .jqRequest(this, postData, arguments, this.recv_completeDelivery);
  }
};

Mesh.Delivery.DeliveryServiceClient.prototype.send_completeDelivery = function(accessToken, deliveryId, callback) {
  this.output.writeMessageBegin('completeDelivery', Thrift.MessageType.CALL, this.seqid);
  var args = new Mesh.Delivery.DeliveryService_completeDelivery_args();
  args.accessToken = accessToken;
  args.deliveryId = deliveryId;
  args.write(this.output);
  this.output.writeMessageEnd();
  return this.output.getTransport().flush(callback);
};

Mesh.Delivery.DeliveryServiceClient.prototype.recv_completeDelivery = function() {
  var ret = this.input.readMessageBegin();
  var fname = ret.fname;
  var mtype = ret.mtype;
  var rseqid = ret.rseqid;
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(this.input);
    this.input.readMessageEnd();
    throw x;
  }
  var result = new Mesh.Delivery.DeliveryService_completeDelivery_result();
  result.read(this.input);
  this.input.readMessageEnd();

  if (null !== result.e) {
    throw result.e;
  }
  if (null !== result.success) {
    return result.success;
  }
  throw 'completeDelivery failed: unknown result';
};
