import React from 'react'
import { Button, View } from 'react-native'
import { styles } from './style';

export function boton({ Color }) {
  console.warn(Color);
    let content = '';

    if (Color = 'red') {
        content = <Button title='OK' style={styles.btnRed} />
    } else {
        content = <Button title='NOK' style={styles.btnBlue} />
    }

  return (
    <View>
      {content}
    </View>
  )
}