import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('SECURITY_SYNC', {schema: 'dbo' } )
export class SECURITY_SYNC {

    @PrimaryGeneratedColumn({
        type: 'numeric',
        // precision:12,
        // scale:0,
        name: 'SSY_ID_N',
        })
    public SSY_ID_N: number;

    @Column('varchar', {
        nullable: true,
        length: 16,
        name: 'SSY_USERID_C',
        })
    public SSY_USERID_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'SSY_LANGUAGE_C',
        })
    public SSY_LANGUAGE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 50,
        name: 'SSY_PROFILE_C',
        })
    public SSY_PROFILE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 16,
        name: 'SSY_GROUP_C',
        })
    public SSY_GROUP_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 5,
        name: 'SSY_ACCESS_C',
        })
    public SSY_ACCESS_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'SSY_RC_N',
        })
    public SSY_RC_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 50,
        name: 'SSY_APPLICATION_C',
        })
    public SSY_APPLICATION_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 25,
        name: 'SSY_COMPUTER_C',
        })
    public SSY_COMPUTER_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'SSY_BEGIN_DAT',
        })
    public SSY_BEGIN_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'SSY_END_DAT',
        })
    public SSY_END_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 5,
        name: 'SSY_STORE_C',
        })
    public SSY_STORE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 25,
        name: 'SSY_ENSEIGNE_C',
        })
    public SSY_ENSEIGNE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 250,
        name: 'SSY_MSG_C',
        })
    public SSY_MSG_C: string | null;

}
