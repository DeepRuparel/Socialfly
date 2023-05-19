import React, { useState, useRef } from "react";

import { Piece } from "avataaars";
import Avatar from "avataaars";
import map from "lodash/map";

import options from "./options";
import {
  Tabs,
  Tabpanes,
  ColorContainer,
  Container,
  StyledAvatar,
  Pieces,
  Color,
  None,
  Tab,
  Tabpane,
} from "./style";


export default function Avataaar(props) {
  const canvasRef = useRef(null);
  const avatarRef = useRef(null);
  const [selectedTab, setSelectedTab] = useState("top");

  const pieceClicked = (attr, val) => {
    var newAttributes = {
      ...props.value,
      [attr]: val,
    };
    if (props.onChange) {
      props.onChange(newAttributes);
    }
  };


 

  return (
    <Container>
      <StyledAvatar>
        <Avatar
          ref={avatarRef}
          style={{ width: "200px", height: "200px" }}
          {...props.value}
        />
      </StyledAvatar>
      <Tabs>
        {map(options, (option) => {
          return (
            <Tab
              selectedTab={selectedTab}
              type={option.type}
              onClick={() => setSelectedTab(option.type)}
            >
              {option.label}
            </Tab>
          );
        })}
      </Tabs>
      <Tabpanes>
        {options.map((option) => {
          return (
            <Tabpane selectedTab={selectedTab} type={option.type}>
              {option.values.map((val) => {
                var attr = {};
                attr[option.attribute] = val;
                if (option.transform) {
                  attr.style = { transform: option.transform };
                }
                return (
                  <Pieces onClick={() => pieceClicked(option.attribute, val)}>
                    {option.type === "avatarStyle" ? (
                      <span style={{ margin: "5px" }}>{val}</span>
                    ) : (
                      <Piece pieceSize="50" pieceType={option.type} {...attr} />
                    )}
                    {(val === "Blank" || val === "NoHair") && (
                      <None>(none)</None>
                    )}
                  </Pieces>
                );
              })}
              <ColorContainer>
                {option.colors &&
                  (option.type !== "top" ||
                    option.hats.indexOf(props.value.topType) === -1) &&
                  props.value.topType !== "Eyepatch" &&
                  props.value.topType !== "LongHairShavedSides" &&
                  props.value.topType !== "LongHairFrida" &&
                  map(option.colors, (color, colorName) => {
                    return (
                      <Color
                        style={{
                          backgroundColor: color,
                          border:
                            color === "#FFFFFF"
                              ? "1px solid #ccc"
                              : "1px solid " + color,
                        }}
                        onClick={() =>
                          pieceClicked(option.colorAttribute, colorName)
                        }
                      ></Color>
                    );
                  })}

                {option.hatColors &&
                  option.hats.indexOf(props.value.topType) !== -1 &&
                  props.value.topType !== "Hat" &&
                  map(option.hatColors, (color, colorName) => {
                    return (
                      <Color
                        style={{
                          backgroundColor: color,
                          border:
                            color === "#FFFFFF"
                              ? "1px solid #ccc"
                              : "1px solid " + color,
                        }}
                        onClick={() => pieceClicked("hatColor", colorName)}
                      ></Color>
                    );
                  })}
              </ColorContainer>
            </Tabpane>
          );
        })}
      </Tabpanes>
      

      
    </Container>
  );
}