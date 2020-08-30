import * as React from "react"
import { observer } from "mobx-react"
import { Container } from "../../Container"

@observer
export class AtomScreenContainer extends Container {

  public render(): React.ReactElement {
    return <div />
  }
}