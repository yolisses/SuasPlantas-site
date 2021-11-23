interface TagsInfoProps {
  tags: { name: string }[];
}

export function TagsInfo({ tags }: TagsInfoProps) {
  return (
    <div className="flex flex-row flex-wrap gap-1">
      {tags.map((tag) => (
        <div className="p-2 border-gray-200 border-2 rounded-lg">
          {tag.name}
        </div>
      ))}
    </div>
  );
}
