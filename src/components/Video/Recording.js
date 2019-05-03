// @flow
import * as React from 'react'
import { h } from 'preact'
import Timeout from '../Timeout'
import Challenge from './Challenge'
import type { ChallengeType } from './Challenge'
import classNames from 'classnames'
import Button from '../Button'
import style from './style.css'
import { localised } from '../../locales'
import type { LocalisedType } from '../../locales'

type Props = {
  currentChallenge: ChallengeType,
  isLastChallenge: boolean,
  hasTimeoutError: boolean,
  hasCameraError: boolean,
  onTimeout: void => void,
  onNext: void => void,
  onStop: void => void,
} & LocalisedType

const Recording = ({ onTimeout, onStop, onNext, currentChallenge, isLastChallenge, hasTimeoutError, hasCameraError, translate }: Props) => (
  <div>
    { !hasTimeoutError && !hasCameraError ? <Timeout key="recording" seconds={ 20 } onTimeout={ onTimeout } /> : null }
    <div className={style.caption}>
      <div>
        <div className={style.recordingIndicator}>
          <span className={style.recordingIndicatorText}>
            {translate('capture.liveness.recording')}
          </span>
        </div>
        <Challenge {...{...currentChallenge}} />
      </div>
    </div>
    <div className={style.actions}>
      <div className={style.captureActionsHint}>
        {translate(`capture.liveness.challenges.done_${ isLastChallenge ? 'stop' : 'next' }`)}
      </div>
      {
        !isLastChallenge ?
          <Button
            variants={['centered', 'primary']}
            disabled={hasCameraError}
            onClick={onNext}
          >
            {translate('capture.liveness.challenges.next')}
          </Button> :
          <button
            aria-label={translate('accessibility.finish_recording')}
            className={classNames(style.btn, style.stopRecording)}
            disabled={hasCameraError}
            onClick={onStop}
          />
      }
    </div>
  </div>
)

export default localised(Recording)
