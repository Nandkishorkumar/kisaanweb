import { gql, useQuery } from "@apollo/client";
import Card from "@components/common/card";
import Layout from "@components/common/layout";
import Search from "@components/common/search";
import ErrorMessage from "@components/ui/error-message";
import Loader from "@components/ui/loader/loader";
import UserList from "@components/User/User_list";
import { getUsers } from "@graphql/queries";
import { useState } from "react";
import { listAllUserProfileQuery, listAllUserProfileQueryVariables } from "src/API";

export default function User() {
    const [searchTerm, setSearchTerm] = useState("");
    const { data, loading, error, fetchMore} = useQuery<listAllUserProfileQuery, listAllUserProfileQueryVariables>(gql(getUsers), { variables: { limit: 10 } })
    console.log('data' ,data)
    if (loading) return <Loader />;
    if (error) return <ErrorMessage message={error.message} />;
    function handleSearch({ searchText }: { searchText: string }) {
        setSearchTerm(searchText);
       
    }


    const loadMore = () => {
        fetchMore({
            variables: { nextToken: data?.listAllUserProfile?.nextToken, limit: 10 }, updateQuery: (previousResult, fetchMoreResult) => {
                const moreusers = fetchMoreResult.fetchMoreResult?.listAllUserProfile?.profiles ?? [];
                const previoususers = previousResult?.listAllUserProfile?.profiles ?? [];
                const nextToken = fetchMoreResult.fetchMoreResult?.listAllUserProfile?.nextToken ?? null;
                return {
                    ...previousResult,
                    listAllUserProfile: {
                        ...previousResult.listAllUserProfile,
                        users: [...previoususers, ...moreusers],
                        nextToken,
                    }
                }
            }
        })
    }


    return (
        <>

            <Card className="flex flex-col md:flex-row items-center mb-8">
                <div className="md:w-1/4 mb-4 md:mb-0">
                    <h1 className="text-lg font-semibold text-heading">All User</h1>
                </div>

                <div className="w-full md:w-3/4 flex items-center ml-auto">
                    <Search onSearch={handleSearch} />
                </div>
            </Card>

            <UserList handleFetchMore={loadMore} nextToken={data?.listAllUserProfile?.nextToken} Users={data?.listAllUserProfile?.profiles} />
        </>
    );
}

User.Layout = Layout;

