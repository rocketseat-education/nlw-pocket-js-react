import { useGetProfile } from '../http/generated/api'

export function UserProfile() {
  const { data } = useGetProfile()

  if (!data) {
    return null
  }

  return (
    <div className="flex items-center gap-3">
      <img src={data.profile.avatarUrl} alt="" className="size-8 rounded-md" />

      <div className="flex flex-col gap-0.5">
        <span className="text-xs font-semibold">{data.profile.name}</span>
        <span className="text-xxs text-zinc-400">
          {data.profile.email ?? 'sem e-mail'}
        </span>
      </div>
    </div>
  )
}
