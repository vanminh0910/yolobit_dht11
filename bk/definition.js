Blockly.Blocks['dht_create'] = {
  /**
   * Block for waiting.
   * @this Blockly.Block
   */
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

Blockly.Blocks['dht_measure'] = {
  init: function() {
    this.jsonInit(
      {
        "message0": Blockly.Msg.DHT_MEASURE_MESSAGE0,
        "args0": [
          {
            "type": "field_variable",
            "name": "SENSOR",
            "variable": "dht-sensor"
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#ff8f3f",
        "tooltip": Blockly.Msg.DHT_MEASURE_TOOLTIP,
        "helpUrl": Blockly.Msg.DHT_MEASURE_HELPURL
      }
    );
  }
};


Blockly.Blocks['dht_read'] = {
  init: function() {
    this.jsonInit(
      {
        "message0": Blockly.Msg.DHT_READ_MESSAGE0,
        "args0": [
          {
            "type": "field_variable",
            "name": "SENSOR",
            "variable": "dht-sensor"
          },
          {
            "type": "field_dropdown",
            "name": "DATA",
            "options": [
              [
                Blockly.Msg.DHT_READ_TEMP,
                "TEMP"
              ],
              [
                Blockly.Msg.DHT_READ_HUMID,
                "HUMID"
              ]
            ]
          }
        ],
        "output": null,
        "colour": "#ff8f3f",
        "tooltip": Blockly.Msg.DHT_READ_TOOLTIP,
        "helpUrl": Blockly.Msg.DHT_READ_HELPURL
      }
    );
  }
};

Blockly.Python['dht_create'] = function(block) {
  var variable_sensor = Blockly.Python.variableDB_.getName(block.getFieldValue('SENSOR'), Blockly.Variables.NAME_TYPE);
  var dropdown_type = block.getFieldValue('TYPE');
  var dropdown_pin = block.getFieldValue('PIN');
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_yolobit'] = 'from yolobit import *';
  Blockly.Python.definitions_['import_dht'] = 'import dht';
  var code = variable_sensor + ' = dht.' + dropdown_type + '(Pin(' + dropdown_pin + '.pin))\n';
  return code;
};

// DHT measure

Blockly.Python['dht_measure'] = function(block) {
  var variable_sensor = Blockly.Python.variableDB_.getName(block.getFieldValue('SENSOR'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = variable_sensor + '.measure()\n';
  return code;
};

//DHT read

Blockly.Python['dht_read'] = function(block) {
  var variable_sensor = Blockly.Python.variableDB_.getName(block.getFieldValue('SENSOR'), Blockly.Variables.NAME_TYPE);
  var dropdown_data = block.getFieldValue('DATA');
  // TODO: Assemble Python into code variable.
  var code = '';
  if (dropdown_data == 'TEMP')
    code = variable_sensor + '.temperature()';
  else
    code = variable_sensor + '.humidity()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};