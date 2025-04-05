import React, { useState } from "react";
import { getUserProfile } from "../services/githubApi";
import { GithubUser } from "../types/github";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const FetchContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 30px;
    background-color: ${(props) => props.theme.colors.backgroundDark};
    width: 50vw;
    margin: 0 auto;
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 32px;
  border: 1px solid #ddd;
  border-radius: 24px;
  background-color: #dbdbdb;
  min-width: 700px;
  margin: 0 auto;
  width: fit-content;
`;

const Avatar = styled.img`
  width: 200px;
  height: 200px;
  border: 2px solid ${(props) => props.theme.colors.primary};
  border-radius: 50%;
  margin-right: 20px;
`;

const ProfileDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.h2`
  margin: 0;
  font-size: 24px;
  color: ${(props) => props.theme.colors.primary};
`;

const Bio = styled.p`
  font-size: 16px;
  color: #333;
`;

const InputContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 550px;
  margin: 20px 0;
`;

const Input = styled.input`
  width: 500px;
  height: 40px;
  padding: 10px;
  font-size: 16px;
  border-radius: 8px;
  border: 1px solid #ddd;
  outline: none;
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: 400;
  gap: 10px;
  color: #fff;
  display: flex;
  align-items: center;
`;

const Highlight = styled.span`
  font-weight: bold;
  letter-spacing: -1px;
  transform: scaleY(1.1);
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  right: 05px;
  transform: translateY(-50%);
  padding: 18px;
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    filter: brightness(0.9);
  }

  svg {
    font-size: 16px;
  }
`;

const ErrorMessage = styled.p`
  background-color: #dbdbdb;
  border-radius: 8px;
  padding: 30px;
  color: red;
  font-size: 18px;
  text-align: center;
`;

const UserProfile: React.FC = () => {
    const [username, setUsername] = useState<string>("");
    const [user, setUser] = useState<GithubUser | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const fetchUserProfile = async (username: string) => {
        try {
            setLoading(true);
            setError(null);
            const data = await getUserProfile(username);
            setUser(data);
        } catch (err) {
            setError("Nenhum perfil foi encontrado com esse nome de usuário. Tente novamente.");
            setUser(null);
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (username.trim()) {
            fetchUserProfile(username);
        } else {
            setError("Por favor, insira um nome de usuário válido.");
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    };

    return (
        <FetchContainer>
            <Title><FontAwesomeIcon icon={faGithub} />Perfil <Highlight>GitHub</Highlight></Title>
            <form onSubmit={handleSubmit}>
                <InputContainer>
                    <Input
                        type="text"
                        value={username}
                        onChange={handleInputChange}
                        placeholder="Digite um usuário do Github"
                    />
                    <Button type="submit">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </Button>
                </InputContainer>
            </form>
            {error && <ErrorMessage>{error}</ErrorMessage>}
            {loading && <p>Carregando...</p>}
            {user && (
                <ProfileContainer>
                    <Avatar src={user.avatar_url} alt={user.name} />
                    <ProfileDetails>
                        <Name>{user.name}</Name>
                        <Bio>{user.bio || "Sem bio disponível"}</Bio>
                    </ProfileDetails>
                </ProfileContainer>
            )}
        </FetchContainer>
    );
};

export default UserProfile;