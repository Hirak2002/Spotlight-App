import { useClerk, useUser } from '@clerk/clerk-expo'
import { useRouter } from 'expo-router'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function Profile() {
  const { signOut } = useClerk()
  const { user } = useUser()
  const router = useRouter()

  const handleSignOut = async () => {
    try {
      await signOut()
      router.replace('/(auth)/login')
    } catch (error) {
      console.error('Sign out error:', error)
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <Text style={styles.email}>{user?.emailAddresses[0]?.emailAddress || 'No email available'}</Text>
      
      <TouchableOpacity style={styles.signOutButton} onPress={handleSignOut}>
        <Text style={styles.signOutText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  email: {
    fontSize: 16,
    color: '#666',
    marginBottom: 40,
  },
  signOutButton: {
    backgroundColor: '#ff4444',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
    minWidth: 200,
  },
  signOutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
})