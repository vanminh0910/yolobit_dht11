Blockly.Blocks['dht11_create'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("create")
        //.appendField(new Blockly.FieldVariable("dht sensor"), "dht_sensor")
        .appendField("type")
        //.appendField(new Blockly.FieldDropdown([["DHT11","DHT11"], ["DHT22","DHT22"]]), "TYPE")
        .appendField("pin");
        //.appendField(new Blockly.FieldDropdown([["P0","pin0"], ["P1","pin1"], ["P2","pin2"], ["P3","pin3"], ["P4","pin4"], ["P5","pin5"], ["P6","pin6"], ["P7","pin7"], ["P8","pin8"], ["P9","pin9"], ["P10","pin10"], ["P11","pin11"], ["P12","pin12"], ["P13","pin13"], ["P14","pin14"], ["P15","pin15"], ["P16","pin16"], ["P19","pin19"], ["P20","pin20"]]), "PIN");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("Update sensor value");
    this.setHelpUrl("");
  }
};

Blockly.Python['dht11_create'] = function(block) {
  //Blockly.Python.definitions_['import_yolobit'] = 'from yolobit import *';
  //Blockly.Python.definitions_['import_dht'] = 'import dht';
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  return code;
};

/*

Blockly.Blocks['dht_create'] = {
  init: function() {
    this.jsonInit(
      {
        "message0": Blockly.Msg.DHT_CREATE_MESSAGE0,
        "args0": [
          {
            "type": "field_variable",
            "name": "dht_sensor",
            "variable": Blockly.Msg.DHT_CREATE_MESSAGE1
          },
          {
            "type": "field_dropdown",
            "name": "TYPE",
            "options": [
              [
                "DHT11",
                "DHT11"
              ],
              [
                "DHT22",
                "DHT22"
              ]
            ]
          },
          {
            "type": "field_dropdown",
            "name": "PIN",
            "options": [
              [
                "P0",
                "pin0"
              ],
              [
                "P1",
                "pin1"
              ],
              [
                "P2",
                "pin2"
              ],
              [
                "P3",
                "pin3"
              ],
              [
                "P4",
                "pin4"
              ],
              [
                "P5",
                "pin5"
              ],
              [
                "P6",
                "pin6"
              ],
              [
                "P7",
                "pin7"
              ],
              [
                "P8",
                "pin8"
              ],
              [
                "P9",
                "pin9"
              ],
              [
                "P10",
                "pin10"
              ],
              [
                "P11",
                "pin11"
              ],
              [
                "P12",
                "pin12"
              ],
              [
                "P13",
                "pin13"
              ],
              [
                "P14",
                "pin14"
              ],
              [
                "P15",
                "pin15"
              ],
              [
                "P16",
                "pin16"
              ],
              [
                "P19",
                "pin19"
              ],
              [
                "P20",
                "pin20"
              ]
            ]
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": '#ff8f3f',
        "tooltip": Blockly.Msg.DHT_CREATE_TOOLTIP,
        "helpUrl": Blockly.Msg.DHT_CREAT_HELPURL
      }
    );
  }
};


Blockly.Python['dht_create'] = function(block) {
  //Blockly.Python.definitions_['import_yolobit'] = 'from yolobit import *';
  //Blockly.Python.definitions_['import_dht'] = 'import dht';
  var variable_sensor = Blockly.Python.variableDB_.getName(block.getFieldValue('dht_sensor'), Blockly.Variables.NAME_TYPE);
  var dropdown_type = block.getFieldValue('TYPE');
  var dropdown_pin = block.getFieldValue('PIN');
  // TODO: Assemble Python into code variable.
  var code = variable_sensor + ' = dht.' + dropdown_type + '(Pin(' + dropdown_pin + '.pin))\n';
  return code;
};
*/