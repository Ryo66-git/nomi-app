"use client";

import { Character } from "../types";
import Avatar from "./Avatar";

interface CharacterSelectorProps {
  characters: Character[];
  selectedCharacterId: string | null;
  onSelect: (characterId: string) => void;
}

export default function CharacterSelector({
  characters,
  selectedCharacterId,
  onSelect,
}: CharacterSelectorProps) {
  // 選択されていない場合は全員表示、選択されている場合は選択された人のみ表示
  const displayCharacters = selectedCharacterId
    ? characters.filter((c) => c.id === selectedCharacterId)
    : characters;

  return (
    <div className="mb-8">
      {selectedCharacterId ? (
        // 選択されている場合は大きく表示
        <div className="flex justify-center">
          {displayCharacters.map((character) => (
            <div
              key={character.id}
              className="bg-gray-800/50 backdrop-blur-sm rounded-3xl border-2 border-blue-500 p-8 max-w-md"
            >
              <div className="flex flex-col items-center">
                <div className="mb-4">
                  <Avatar characterId={character.id} size="xl" />
                </div>
                <div className="text-center">
                  <div className="font-bold text-2xl mb-2">{character.name}</div>
                  <div className="text-gray-400 mb-4">{character.description}</div>
                  <button
                    onClick={() => onSelect(character.id)}
                    className="px-6 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors text-sm"
                  >
                    選択を解除
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        // 選択されていない場合はグリッド表示
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {displayCharacters.map((character) => (
            <button
              key={character.id}
              onClick={() => onSelect(character.id)}
              className="p-6 rounded-2xl border-2 border-gray-700 bg-gray-800/50 hover:border-gray-600 hover:bg-gray-800 transition-all duration-200"
            >
              <div className="flex justify-center mb-2">
                <Avatar characterId={character.id} size="lg" />
              </div>
              <div className="font-bold text-lg mb-1">{character.name}</div>
              <div className="text-sm text-gray-400">{character.description}</div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

