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

    @media (max-width: 768px) {
        width: 85vw;
        padding: 20px;
    }
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 32px;
  border: 1px solid #ddd;
  border-radius: 24px;
  background-color: #dbdbdb;
  margin: 0 auto;
  width: 30vw;

  @media (max-width: 768px) {
    width: 80vw;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
  }

  @media (max-width: 480px) {
    padding: 15px;
  }
`;

const Avatar = styled.img`
  width: 200px;
  height: 200px;
  border: 2px solid ${(props) => props.theme.colors.primary};
  border-radius: 50%;
  margin-right: 20px;

  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
    margin-right: 0;
    margin-bottom: 15px;
  }

  @media (max-width: 480px) {
    width: 120px;
    height: 120px;
  }
`;

const ProfileDetails = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

const Name = styled.h2`
  margin: 0;
  font-size: 24px;
  color: ${(props) => props.theme.colors.primary};

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

const Bio = styled.p`
  font-size: 16px;
  color: #333;

  @media (max-width: 480px) {
    font-size: 14px;
  }
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

  @media (max-width: 768px) {
    width: 80vw;
    font-size: 14px;
    height: 38px;
  }
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: 400;
  gap: 10px;
  color: #fff;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    font-size: 36px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
  }
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

  @media (max-width: 480px) {
    width: 32px;
    height: 32px;
    svg {
      font-size: 14px;
    }
  }
`;

const ErrorMessage = styled.p`
  background-color: #dbdbdb;
  border-radius: 8px;
  padding: 30px;
  color: red;
  font-size: 18px;
  text-align: center;

  @media (max-width: 480px) {
    padding: 20px;
    font-size: 16px;
  }
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