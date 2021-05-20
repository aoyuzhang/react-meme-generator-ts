import * as React from 'react'

interface FormInterface{
  isMemeGenerated: boolean;
  textBottom: string;
  textTop: string;
  handleImageChange: () => void;
  handleImageInputChange: (event: React.ChangeEvent) => void;
  handleInputCHange: (event: React.ChangeEvent) => void;
  handleMemeGeneration: () => void;
  handleMemeReset: () => void;
}
