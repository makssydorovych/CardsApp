import { useState } from 'react'

import { SubmitHandler, useForm } from 'react-hook-form'

import s from './personal-information.module.scss'

import Edit from '@/assets/icons/edit.tsx'
import Logout from '@/assets/icons/logout.tsx'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ControlledTextField } from '@/components/ui/controlled'
import { Typography } from '@/components/ui/typography'

type FormData = {
  newName: string
}

type Props = {
  email: string
  avatar: string
  name: string
  onLogout: () => void
  onAvatarChange: (newAvatar: string) => void
  onNameChange: (newName: string) => void
}

export const PersonalInformation = ({
  avatar,
  email,
  name,
  onAvatarChange,
  onNameChange,
  onLogout,
}: Props) => {
  const { handleSubmit, control, reset } = useForm<FormData>()
  const [isEditingName, setIsEditingName] = useState(false)

  const onSubmit: SubmitHandler<FormData> = ({ newName }) => {
    onNameChange(newName)
    setIsEditingName(false)
  }

  const handleAvatarChange = () => {
    onAvatarChange('new avatar')
  }

  const handleStartEditingName = () => {
    setIsEditingName(true)
    reset({ newName: name })
  }

  const handleNameBlur = () => {
    setIsEditingName(false)
    handleSubmit(onSubmit)()
  }

  return (
    <Card className={s.personalInformation}>
      <Typography variant="large" className={s.title}>
        Personal Information
      </Typography>
      <div className={s.photoContainer}>
        <div className={s.photoBox}>
          <img src={avatar} alt={'avatar'} />
          <button
            className={s.photoEditButton}
            onClick={handleAvatarChange}
            aria-label="Edit Avatar"
          >
            <Edit />
          </button>
        </div>
      </div>
      {isEditingName ? (
        <div className={s.nameContainer}>
          <form onSubmit={handleSubmit(onSubmit)} className={s.changeNameForm}>
            <ControlledTextField
              name="newName"
              control={control}
              className={s.editableNameInput}
              onBlur={handleNameBlur}
            />
            <Button variant="primary" type="submit" className={s.saveChangesButton}>
              Save Changes
            </Button>
          </form>
        </div>
      ) : (
        <div className={s.nameContainer}>
          <Typography variant="h1" className={s.name}>
            {name}
          </Typography>
          <button
            className={s.editNameButton}
            onClick={handleStartEditingName}
            aria-label="Edit Name"
          >
            <Edit />
          </button>
        </div>
      )}
      {!isEditingName && (
        <>
          <Typography variant="body2" className={s.email}>
            {email}
          </Typography>
          <div className={s.buttonContainer}>
            <Button variant={'secondary'} onClick={onLogout}>
              <Logout />
              Log Out
            </Button>
          </div>
        </>
      )}
    </Card>
  )
}
