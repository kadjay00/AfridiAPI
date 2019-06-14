import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_MAIL', {schema: 'dbo' } )
export class T_MAIL {

    @PrimaryGeneratedColumn({
        type: 'numeric',
        // scale:0,
        name: 'MAI_MAILID_N',
        })
    public MAI_MAILID_N: number;

    @Column('char', {
        nullable: true,
        name: 'MAI_TYPE_C',
        })
    public MAI_TYPE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 20,
        name: 'MAI_OWNER_C',
        })
    public MAI_OWNER_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 20,
        name: 'MAI_DEST_C',
        })
    public MAI_DEST_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 80,
        name: 'MAI_TITLE_C',
        })
    public MAI_TITLE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 80,
        name: 'MAI_DIRECTORY_C',
        })
    public MAI_DIRECTORY_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 85,
        name: 'MAI_NAME_C',
        })
    public MAI_NAME_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'MAI_EXPIREDDATE_DAT',
        })
    public MAI_EXPIREDDATE_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'MAI_CREATIONDATE_DAT',
        })
    public MAI_CREATIONDATE_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 10,
        name: 'MAI_LASTUSERACCESS_C',
        })
    public MAI_LASTUSERACCESS_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'MAI_LASTUSERACCESS_DAT',
        })
    public MAI_LASTUSERACCESS_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 10,
        name: 'MAI_USERVALIDATION_C',
        })
    public MAI_USERVALIDATION_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'MAI_USERVALIDATION_DAT',
        })
    public MAI_USERVALIDATION_DAT: Date | null;

}
