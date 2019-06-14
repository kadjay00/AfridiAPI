import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('SECURITY_MAPPINGS', {schema: 'dbo' } )
export class SECURITY_MAPPINGS {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 50,
        name: 'SMA_PROFILE_C',
        })
    public SMA_PROFILE_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 15,
        name: 'SMA_ENSEIGNE_C',
        })
    public SMA_ENSEIGNE_C: string;

    @Column('varchar', {
        nullable: true,
        length: 16,
        name: 'SMA_GROUP_C',
        })
    public SMA_GROUP_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 2,
        name: 'SMA_ACCESS_C',
        })
    public SMA_ACCESS_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'SMA_MULTISTORE_C',
        })
    public SMA_MULTISTORE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'SMA_PRINTPF_C',
        })
    public SMA_PRINTPF_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'SMA_LOCAL_C',
        })
    public SMA_LOCAL_C: string | null;

}
